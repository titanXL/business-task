import { connect } from "react-redux";

interface Props {
  loading: any;
}

const App: React.FC<Props> = ({ loading }) => {
  return <div className="App">{JSON.stringify(loading, null, 2)}</div>;
};

const mapStateToProps = ({ loading }: any) => ({
  loading,
});

export default connect(mapStateToProps)(App);
