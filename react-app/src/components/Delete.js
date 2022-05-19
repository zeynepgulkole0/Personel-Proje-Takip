import axios from "axios";
export default function Delete(props) {
    const {maindelete, row, list } = props;

    const onClickDelete = async (e) => {
        e.preventDefault();
        await axios
            .delete(`http://127.0.0.1:8000/api/${maindelete}/delete/` + row.id)
        list(true);
    };
    return (
        <button className="btn btn-danger" onClick={onClickDelete}>Sil</button>
    );
}