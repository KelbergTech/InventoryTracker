import { useTheme } from "@react-navigation/native";

import { CustomText } from "@/components/Styled/Text";
import { Container } from "@/components/Styled/View";

export default () => {
  const { colors } = useTheme();

  return (
    <Container variant="primary">
      <CustomText variant="primary">Global Settings</CustomText>
    </Container>
  );
};
