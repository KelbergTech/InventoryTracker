import SuperTokens from "supertokens-react-native";

SuperTokens.init({
  apiDomain: process.env.EXPO_PUBLIC_API_URL ?? "",
  apiBasePath: "/auth",
});
