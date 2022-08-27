import { defineMessages } from "react-intl";

const scope = "championsBoard";

const championsBoardMessages = defineMessages({
  NoChapmsTitle: {
    id: `${scope}.NoChapmsTitle`,
    defaultMessage: "Select your squad to defend earthrealm",
  },
  fullChampsTitle: {
    id: `${scope}.fullChampsTitle`,
    defaultMessage: "Your Champions!",
  },
});

export default championsBoardMessages;
