import Heading from "../ui/Heading";
import UpdateSettingForm from "../features/settings/UpdateSettingsForm";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row type="vertical">
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingForm />
    </Row>
  );
}

export default Settings;
