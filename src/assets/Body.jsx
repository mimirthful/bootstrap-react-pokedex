import { useState } from "react";
import Dex from "./Dex"
import SubmitForm from "./SubmitForm";
export default function Body()
{
      const [submission, setSubmission] = useState("");

    return   <>
        <div className="row">
            <div className="col-lg-7 bg-light rounded-start">

                <div className="p-4">
                    <h2> Welcome to the Pokédex!</h2>
                    <p> 
                        Here you can search information about different pokémon by typing
                        it's name or national ID on the search field below.
                    </p>
                </div>

                <div className="p-2">
                    <SubmitForm onFinish={setSubmission}/> 
                </div>

            </div>

            <div className="col bg-dark rounded-end">
                <Dex request={submission}/> 
            </div>
        </div>
    </> 
}