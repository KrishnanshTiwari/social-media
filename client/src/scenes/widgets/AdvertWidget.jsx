import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://www.google.com/imgres?q=avengers&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFm8esk4aMAI7SOx%3Fformat%3Djpg%26name%3Dlarge&imgrefurl=https%3A%2F%2Ftwitter.com%2Fplayavengers&docid=2M2aDFyGguCdpM&tbnid=aZl268b5yGMQ6M&vet=12ahUKEwihzLn4gOaGAxVLS2wGHeq2DbUQM3oECGwQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwihzLn4gOaGAxVLS2wGHeq2DbUQM3oECGwQAA"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
