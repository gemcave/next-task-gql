import { NextPage } from "next";
import { withApollo } from "../lib/apollo";
import { useTasksQuery, TaskStatus } from "../generated/graphql";

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

  return tasks ? (
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  ) : (
    <>No Tasks</>
  );
};

const IndexPageWithApollo = withApollo({ ssr: true })(IndexPage);
export default IndexPageWithApollo;
