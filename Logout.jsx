// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../TodoRouter/Logout.css";
function Logout(props) {
  // const navigate = useNavigate();
  return (
    <div className="wrbz">
      <div className="containerz">
        
        <div className="row justify-content-center mt-5">
          <h3
            style={{
              fontStyle: "revert",
              fontSize: "50px",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Have logged out successfully {props.params.name}
          </h3>

          <br />
          <div className="submitz">
            <Link
              className="btnz"
              style={{
                minWidth: "250px",
                fontSize: "center",
                marginLeft: "440px",
              }}
              to="/login"
              // onClick={() => navigate("/list")}
            >
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Click here to login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logout;
