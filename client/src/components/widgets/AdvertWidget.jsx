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
        src="http://localhost:3001/assets/horizontal2_5.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>O!Oi</Typography>
        <Typography color={medium}>https://oioicollection.com/kr/</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Explore O!Oi's lastest collections and campaigns, discover clothing and
        accessories for Women and Men.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
