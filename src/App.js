import logo from './logo.svg';
import './App.css';
import './style.css'

function Header(props) {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Valley_Logo.png/1200px-Valley_Logo.png" class="logo"/>
      <div class="items">
        <Item number={1}/>
        <Item number={2}/>
        <Item number={3}/>
        <Item number={4}/>
        <Item number={5}/>
      </div>
  </header>
  )
}

function Item(props) {
  return (
    <p>Item {props.number}</p>
  )
}

function Block(props) {
  return (
    <div class="block">
      <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" class="image"/>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <h6>{props.children}</h6>
      <h5 class="go">Go</h5>
    </div>
  )
}

function Aside(props) {
  return(
    <aside className={"aside" + props.number}>
            <div>Aside {props.number}</div>
        </aside>
  )
}

function Footer(props) {
  return (
    <footer>
      Footer
    </footer>
  )
}

function App() {
  return (
    <div className="App">
    <Header/>
    <main className="main">
        <Aside number={1}/>
        <section className="content">
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit eligendi animi saepe aperiam fugiat. Illo unde molestiae ex. Soluta sint nam saepe culpa. Voluptatum numquam eius dolor officiis deserunt eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae debitis optio asperiores reprehenderit non porro ipsam molestiae adipisci ut explicabo, et quam provident vitae facilis officia corporis quod corrupti!</h3>
            <h2>
                OUR WORK
            </h2>
            <div className="cards">
                <Block>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repellat necessitatibus magnam veritatis praesentium, at omnis laboriosam dignissimos ea quia voluptates non quo excepturi ut nemo libero. Exercitationem, harum cumque.
                </Block>
                <Block>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et, sapiente culpa quisquam dicta mollitia suscipit aut? 
                </Block>
                <Block>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate exercitationem voluptatum vel unde alias nemo iusto laudantium, quibusdam laboriosam accusantium nisi amet, illo suscipit iure quisquam nesciunt magni facere.
                </Block>
                <Block>
                Doloribus facere facilis architecto accusantium velit totam. Aut, illo impedit velit culpa explicabo, obcaecati recusandae iste nisi error accusantium, dicta ducimus officiis! 
                </Block>
                <Block>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia nemo enim officiis cum vel accusamus minima, nobis at rem aut qui, labore veritatis odio eius, doloremque laboriosam harum totam?
                </Block>
                <Block>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et, sapiente culpa quisquam dicta mollitia suscipit aut? 
                </Block>
            </div>
        </section>
        <Aside number={2}/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
