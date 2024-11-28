import "./Grid.css";

const Grid = () => {
  return (
    <div className="grid-table-container">
      <div className="grid-table">
        <div className="grid-header">ID</div>
        <div className="grid-header">Name</div>
        <div className="grid-header">Email</div>
        <div className="grid-header">Address</div>

        <div className="grid-cell">1</div>
        <div className="grid-cell">Leanne Graham</div>
        <div className="grid-cell">Sincere@april.biz</div>
        <div className="grid-cell">Kulas Light, Apt. 556</div>

        <div className="grid-cell">2</div>
        <div className="grid-cell">Ervin Howell</div>
        <div className="grid-cell">Shanna@melissa.tv</div>
        <div className="grid-cell">Victor Plains, Suite 879</div>

        <div className="grid-cell">3</div>
        <div className="grid-cell">Clementine Bauch</div>
        <div className="grid-cell">Nathan@yesenia.net</div>
        <div className="grid-cell">Douglas Extension, Suite 847</div>

        <div className="grid-cell">4</div>
        <div className="grid-cell">Sonu singh</div>
        <div className="grid-cell">Sonusingh@gmail.com</div>
        <div className="grid-cell">Anand Nagar</div>
      </div>
    </div>
  );
};

export default Grid;
