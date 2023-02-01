import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const Project = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            euismod justo. Aliquam a lorem vel libero venenatis cursus. Donec in
            bibendum justo, eget tristique erat. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Maecenas in elit mi. Praesent viverra nisi eu
            turpis porta, ut iaculis mauris ultricies. Phasellus vestibulum
            augue in tincidunt pretium. Integer ipsum risus, pretium et ante et,
            mollis tempor lectus. Ut faucibus malesuada mi, vitae mollis ligula.
            Suspendisse maximus pellentesque vestibulum. Mauris{" "}
          </div>
          <div className="col-md-6">
            <h3>contributors</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8"> Chart</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div class="card text-left">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
