import { getTrad } from "../../../utils";

const layout = [
  {
    intlLabel: {
      id: getTrad("Settings.enabled.label"),
      defaultMessage: "Settings.enabled.label",
    },
    description: {
      id: getTrad("Settings.enabled.description"),
      defaultMessage: "Settings.enabled.description",
    },
    name: "enabled",
    type: "bool",
    size: {
      col: 6,
      xs: 6,
    },
  },
  {
    intlLabel: {
      id: getTrad("Settings.createUser.label"),
      defaultMessage: "Settings.createUser.label",
    },
    description: {
      id: getTrad("Settings.createUser.description"),
      defaultMessage: "Settings.createUser.description",
    },
    name: "createUserIfNotExists",
    type: "bool",
    size: {
      col: 6,
      xs: 6,
    },
  },
  {
    intlLabel: {
      id: getTrad("Settings.token_length.label"),
      defaultMessage: "Settings.token_length.label",
    },
    description: {
      id: getTrad("Settings.token_length.description"),
      defaultMessage: "Settings.token_length.description",
    },
    name: "token_length",
    type: "number",
    defaultValue: 20,
    size: {
      col: 6,
      xs: 6,
    },
  },
  {
    intlLabel: {
      id: getTrad("Settings.expire_period.label"),
      defaultMessage: "Settings.expire_period.label",
    },
    description: {
      id: getTrad("Settings.expire_period.description"),
      defaultMessage: "Settings.expire_period.description",
    },
    name: "expire_period",
    type: "number",
    size: {
      col: 6,
      xs: 6,
    },
  },
];

export default layout;
