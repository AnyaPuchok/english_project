import logo from "./logo.svg";
import "./App.css";
import data from ".Data.js";

function Header() {
  return (
    <>
      <p>
        <a href="#">Список слов </a>
        <a href="#"> Тренировка</a>
      </p>
      <h1>Изучаем английский язык</h1>
    </>
  );
}
function Main() {
  return (
    <>
      <h2>Список слов</h2>
      <GeneralList />
    </>
  );
}
function Footer() {
  return <p>Для заметок</p>;
}

function Card() {}
function LineList() {}
function GeneralList() {
  const generallist = data.map(({ english, russian, id }) => {
    return (
      <tr key={id}>
        <td>{english}</td>
        <td>{russian}</td>
      </tr>
    );
  });
  return (
    <table border="">
      <thead>
        <tr>
          <td>Слово</td>
          <td>Перевод</td>
        </tr>
      </thead>
      <tbody>{generallist}</tbody>
    </table>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
