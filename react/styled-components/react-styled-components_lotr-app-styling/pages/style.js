import { createGlobalStyle } from "styled-components";
import useRouter from "next/router";

const router = useRouter();
const { slug } = router.query;

export default createGlobalStyle;
`
body {
    background-color: color.slug
}
`;
