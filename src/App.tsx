import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

interface Props {
  loading: any;
}

const App: React.FC<Props> = ({ loading }) => {
  return (
    <div className="App">
      {JSON.stringify(loading, null, 2)}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

const mapStateToProps = ({ loading }: any) => ({
  loading,
});

export default connect(mapStateToProps)(App);
