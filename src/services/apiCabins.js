import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://azylgbmvlpxmuiszkrtf.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg

  // 1. Create/Edit Cabin
  let query = supabase.from("cabin");

  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload Image

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  // 3. If the image Failed, Delete cabin
  if (storageError) await supabase.from("cabin").delete().eq("id", data.id);

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}
