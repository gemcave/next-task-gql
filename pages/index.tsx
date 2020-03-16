import { NextPage } from "next";

interface InitialProps {
	greeting: String
}

interface Props extends InitialProps {}

const IndexPage: NextPage<InitialProps, Props> = (props) => {
	return <div>{props.greeting}</div>;
}

IndexPage.getInitialProps = async () => ({greeting: "Hello"});
export default IndexPage;