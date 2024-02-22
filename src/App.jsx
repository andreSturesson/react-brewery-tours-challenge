import './App.css';
import './reset.css';
function App() {

  return (
    <>
      <header className="main-header">
        <section className="select-state-section">
          <h2>Welcome to Brewery Tours</h2>
          <input id="select-state" name="select-state" type="text" placeholder="Search Breweries" />
          <button id="visit" style={{ backgroundColor: 'red' }}>Visit-list</button>
        </section>
      </header>
      <main>
        <aside className="filters-section">
          <h2 className="filters-section-heading">Filter By:</h2>
          <form id="filter-by-type-form" autoComplete="off">
            <label htmlFor="filter-by-type"><h3>Type of Brewery</h3></label>
            <select name="filter-by-type" id="filter-by-type">
              <option value="">Select a type...</option>
              <option value="micro">Micro</option>
              <option value="regional">Regional</option>
              <option value="brewpub">Brewpub</option>
            </select>
          </form>
          <div className="filter-by-city-heading">
            <h3>Cities</h3>
            <button className="clear-all-btn">clear all</button>
          </div>
          <form id="filter-by-city-form">
            <input type="checkbox" name="chardon" value="chardon" />
            <label htmlFor="chardon">Chardon</label>

            <input type="checkbox" name="mason" value="mason" />
            <label htmlFor="mason">Mason</label>

            <input type="checkbox" name="whitehall" value="whitehall" />
            <label htmlFor="whitehall">Whitehall</label>

            <input type="checkbox" name="defiance" value="defiance" />
            <label htmlFor="defiance">Defiance</label>

            <input type="checkbox" name="columbus" value="columbus" />
            <label htmlFor="columbus">Columbus</label>

            <input type="checkbox" name="akron" value="akron" />
            <label htmlFor="akron">Akron</label>

            <input type="checkbox" name="cleveland" value="cleveland" />
            <label htmlFor="cleveland">Cleveland</label>

            <input type="checkbox" name="mount-orab" value="mount-orab" />
            <label htmlFor="mount-orab">Mount Orab</label>

            <input type="checkbox" name="lorain" value="lorain" />
            <label htmlFor="lorain">Lorain</label>

            <input type="checkbox" name="austintown" value="austintown" />
            <label htmlFor="austintown">Austintown</label>

            <input type="checkbox" name="columbiana" value="columbiana" />
            <label htmlFor="columbiana">Columbiana</label>

            <input type="checkbox" name="toledo" value="toledo" />
            <label htmlFor="toledo">Toledo</label>

            <input type="checkbox" name="holland" value="holland" />
            <label htmlFor="holland">Holland</label>

            <input type="checkbox" name="lakewood" value="lakewood" />
            <label htmlFor="lakewood">Lakewood</label>

            <input type="checkbox" name="bowling-green" value="bowling-green" />
            <label htmlFor="bowling-green">Bowling Green</label>

            <input type="checkbox" name="dayton" value="dayton" />
            <label htmlFor="dayton">Dayton</label>

            <input type="checkbox" name="wilmington" value="wilmington" />
            <label htmlFor="wilmington">Wilmington</label>

            <input type="checkbox" name="cleveland-heights" value="cleveland-heights" />
            <label htmlFor="cleveland-heights">Cleveland Heights</label>

            <input type="checkbox" name="strongsville" value="strongsville" />
            <label htmlFor="strongsville">Strongsville</label>

            <input type="checkbox" name="canal-winchester" value="canal-winchester" />
            <label htmlFor="canal-winchester">Canal Winchester</label>

            <input type="checkbox" name="logan" value="logan" />
            <label htmlFor="logan">Logan</label>

            <input type="checkbox" name="willoughby" value="willoughby" />
            <label htmlFor="willoughby">Willoughby</label>

            <input type="checkbox" name="buckeye-lake" value="buckeye-lake" />
            <label htmlFor="buckeye-lake">Buckeye Lake</label>

            <input type="checkbox" name="newark" value="newark" />
            <label htmlFor="newark">Newark</label>

            <input type="checkbox" name="canton" value="canton" />
            <label htmlFor="canton">Canton</label>

            <input type="checkbox" name="port-clinton" value="port-clinton" />
            <label htmlFor="port-clinton">Port Clinton</label>

            <input type="checkbox" name="mentor" value="mentor" />
            <label htmlFor="mentor">Mentor</label>

            <input type="checkbox" name="warren" value="warren" />
            <label htmlFor="warren">Warren</label>
          </form>
        </aside>
        <h1>List of Breweries</h1>
        <article>
          <ul id="breweries-list" className="breweries-list">
          </ul>
          <button id="prev-page">Previous</button>
          <button id="next-page">Next</button>
        </article>
      </main>
    </>
  );
}

export default App;
