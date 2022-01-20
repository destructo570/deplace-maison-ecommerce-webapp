import { useRouter } from "next/router";
import ActionButton from "../global/ActionButton/ActionButton";
import Wrapper from "../wrapper/Wrapper";
import CategoryItems from "./CategoryItems";
import { motion } from "framer-motion";
import {
  StyledCategorySection,
  StyledCollections,
  StyledHeading,
  StyledSubHeading,
} from "./styledComponents";

function Collections() {
  const router = useRouter();

  const exploreHandler = () => {
    router.push("/products/");
  };

  const initialTitleState = {
    overflow: "hidden",
    minHeight: "0.9em",
    position: "relative",
  };

  const initialTextState = {
    position: "absolute",
    bottom: "-100px",
    right: "0px",
    minHeight: "inherit",
  };
  return (
    <Wrapper>
      <StyledCollections exit={{ opacity: 0 }}>
        <StyledHeading>
          <motion.h1 initial={initialTitleState}>
            <motion.span
              initial={initialTextState}
              transition={{ duration: 0.75, ease: "easeOut" }}
              animate={{ bottom: "0px" }}
            >
              SPRING,
            </motion.span>
          </motion.h1>
          <StyledSubHeading>
            <motion.h1 initial={initialTitleState}>
              <motion.span
                initial={initialTextState}
                transition={{ delay: 0.2, duration: 0.75, ease: "easeOut" }}
                animate={{ bottom: "0px" }}
              >
                SUMMER
              </motion.span>
            </motion.h1>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              COLL.
              <br />
              2021
            </motion.h3>
          </StyledSubHeading>
        </StyledHeading>
        <StyledCategorySection>
          <CategoryItems />
        </StyledCategorySection>
        <ActionButton title="Explore" onClick={exploreHandler} />
      </StyledCollections>
    </Wrapper>
  );
}

export default Collections;
