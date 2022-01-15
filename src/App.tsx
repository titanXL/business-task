import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

interface Props {
  loading: any;
}

const App: React.FC<Props> = ({ loading }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

function Home() {
  return <h2>Home</h2>;
}

const mapStateToProps = ({ loading }: any) => ({
  loading,
});

export default connect(mapStateToProps)(App);
