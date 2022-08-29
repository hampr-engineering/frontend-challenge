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
  questionMark: {
    id: `${scope}.questionMark`,
    defaultMessage: "?",
  },
  removeChampion: {
    id: `${scope}.removeChampion`,
    defaultMessage: "remove",
  },
});

export default championsBoardMessages;
