import { useParams } from "react-router-dom"

export default function Colaborador() {
  const { id } = useParams();

  return (
    <div>
        Colaborador <h1>{ id }</h1>
    </div>
  );
}