import { NextPage } from "next";
import { withApollo } from "../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const tasksQuery = gql`
  query Tasks($status: TaskStatus) {
    tasks(status: $status) {
      id
      title
      status
    }
  }
`;

interface InitialProps {
  greeting: String;
}

interface TasksQuery {
  tasks: {
    id: number;
    title: string;
    status: string;
  }[];
}

interface TasksQueryVariables {
  status: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<InitialProps, Props> = props => {
  const { data, error, loading } = useQuery<TasksQuery, TasksQueryVariables>(
    tasksQuery,
    {
      variables: {
        status: "active"
      }
    }
  );

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
