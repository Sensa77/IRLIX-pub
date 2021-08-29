function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">Главная</h1>
          <span className="header__data">17 июля 2021</span>
        </div>
        <img className="header__logo"></img>
      </header>
      <nav className="filter">
        <ul className="filter__list">
          <li className="filter__item">Новинки</li>
          <li className="filter__item">Сладкие</li>
          <li className="filter__item">Хит</li>
          <li className="filter__item">Крепкие</li>
        </ul>
      </nav>
      <main className="cards">
        <div className="bookmark">
          <button type="button" className="bookmark=btn"></button>
          <div className="cardItem">
            <span className="cardItem__name">Blackberry</span>
            <span className="cardItem__filter">Fresh drink</span>
            <div className="cardItem__composition">
              <span className="cardItem__composition-perсent">30%</span>
              <span className="cardItem__composition-title">Алкоголь</span>
            </div>
          </div>
        </div>
        <div className="bookmark">
          <button type="button" className="bookmark__btn"></button>
          <div className="cardItem">
            <span className="cardItem__name">Мохито</span>
            <span className="cardItem__filter">Fresh drink</span>
            <div className="cardItem__composition">
              <span className="cardItem__composition-perсent">40%</span>
              <span className="cardItem__composition-title">Алкоголь</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="searchPanel">
        <button type="button" className="searchPanel__button">
          Избранные
        </button>
        <button type="button" className="searchPanel__button-search">
          <img className="searchPanel__icon"></img>
        </button>
        <input
          className="searchPanel__input"
          placeholder="Введите название"
        ></input>
      </footer>
    </div>
  );
}

export default App;
