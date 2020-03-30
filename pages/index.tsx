import { NextPage } from "next";
import { withApollo } from "../lib/apollo";
import { useTasksQuery, TaskStatus } from "../generated/graphql";
import TaskList from "../components/TaskList";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<InitialProps, Props> = props => {
  const { data, error, loading } = useTasksQuery({
    variables: {
      status: TaskStatus.Active
    }
  });

  const tasks = data?.tasks;

  if (loading) return <div>loading...</div>;
  if (error) return <div>{`Oops, error: ${error}`}</div>;

  return tasks ? <TaskList tasks={tasks} /> : <>No Tasks</>;
};

const IndexPageWithApollo = withApollo({ ssr: true })(IndexPage);
export default IndexPageWithApollo;
