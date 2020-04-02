import styled from "styled-components";
import { Flex, Box } from "rebass/styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// css
import theme from "../../../../css/theme";

const SkeletonTableRow = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: 6px;
`;

const SkeletonScreen = () => {
  return (
    <Flex flexDirection="column">
      <Flex mb={4}>
        <Box mr={4}>
          <SkeletonTheme
            highlightColor={theme.colors.purple}
            color={theme.colors.lightPurple}
          >
            <Skeleton circle={true} height={100} width={100} />
          </SkeletonTheme>
        </Box>
        <Box width={300}>
          <SkeletonTheme
            highlightColor={theme.colors.purple}
            color={theme.colors.lightPurple}
          >
            <Skeleton count={2} wrapper={SkeletonTableRow} />
          </SkeletonTheme>
        </Box>
      </Flex>
      <Flex mx={-2} flexWrap="wrap">
        <Box width={[1, 1, 1, "65%"]}>
          <SkeletonTheme
            highlightColor={theme.colors.purple}
            color={theme.colors.lightPurple}
          >
            <Skeleton wrapper={SkeletonTableRow} count={20} height={30} />
          </SkeletonTheme>
        </Box>

        <Box px={[0, 0, 0, 2]} width={[1, 1, 1, "35%"]}>
          <Flex flexDirection="column">
            <Box mb={4}>
              <SkeletonTheme
                highlightColor={theme.colors.purple}
                color={theme.colors.lightPurple}
              >
                <Skeleton count={5} />
              </SkeletonTheme>
            </Box>
            <Box mb={4}>
              <SkeletonTheme
                highlightColor={theme.colors.purple}
                color={theme.colors.lightPurple}
              >
                <Skeleton count={5} />
              </SkeletonTheme>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SkeletonScreen;
