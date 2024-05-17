import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if(!isRouteErrorResponse(error)){
    return null;
  }

  return(
    <div>
      <h1>Something went wrong</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}> &larr; Go Back</button>
    </div>
  )
}