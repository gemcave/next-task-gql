import { NextPage } from "next";
import { withApollo } from "../lib/apollo";

interface InitialProps {
  greeting: String;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<InitialProps, Props> = props => {
  return <div>{props.greeting}</div>;
};

IndexPage.getInitialProps = async () => ({ greeting: "Hello" });
const IndexPageWithApollo = withApollo(IndexPage);
export default IndexPageWithApollo;
