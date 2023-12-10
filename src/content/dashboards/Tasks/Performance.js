import {
  Card,
  Box,
  CardContent,
  Typography,
  Avatar,
  useTheme,
  styled
} from '@mui/material';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';

const RootWrapper = styled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.green1};
    color: ${theme.colors.alpha.white[100]};
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.main};
      color: ${theme.palette.error.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.error};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);



function Performance() {
  const theme = useTheme();

  return (
    <RootWrapper
      sx={{
        p: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          px: 2,
          pb: 1,
          pt: 2,
          fontSize: `${theme.typography.pxToRem(23)}`,
          color: `${theme.colors.alpha.white[100]}`
        }}
      >
        Performance
      </Typography>
      <CardContent>

        <Box
          display="flex"
          sx={{
            px: 2,
            pb: 3
          }}
          alignItems="center"
        >
          <AvatarSuccess
            sx={{
              mr: 2
            }}
            variant="rounded"
          >
            <AssignmentTurnedInTwoToneIcon fontSize="large" />
          </AvatarSuccess>
          <Box>
            <Typography variant="h1">23</Typography>
            <TypographySecondary variant="subtitle2" noWrap>
              tasks created
            </TypographySecondary>
          </Box>
        </Box>

        <Box
          display="flex"
          sx={{
            px: 2,
            pb: 3
          }}
          alignItems="center"
        >
          <AvatarError
            sx={{
              mr: 2
            }}
            variant="rounded"
          >
            <CancelPresentationTwoToneIcon fontSize="large" />
          </AvatarError>
          <Box>
            <Typography variant="h1">5</Typography>
            <TypographySecondary variant="subtitle2" noWrap>
              tasks closed
            </TypographySecondary>
          </Box>
        </Box>
        
      </CardContent>
    </RootWrapper>
  );
}

export default Performance;
