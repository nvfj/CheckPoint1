
import './App.css';

function App() {
  return (
    <div className="App">
  <nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
<h1> hello for new project </h1>


<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card text-white bg-secondary mb-3 card-custom">
        <div class="card-body">
          <h5 class="card-title">card title 1</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-secondary mb-3 card-custom">
        <div class="card-body">
          <h5 class="card-title">card title 2</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-secondary mb-3 card-custom">
        <div class="card-body">
          <h5 class="card-title">card title 3</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
