import React from "react";

import FileUploadContainer from "./FileUpload";

const ReactionModelUpload = (props) => {
  const initialState = {
    name: "reaction_file",
    uploadPath: "/api/upload/reaction",
    type: "UPLOAD_REACTION_MODEL",
  };

  return (
    <div className="reaction-file-upload">
      <h1>Upload - Reaction Model</h1>
      <p className="lead text-muted">
        To get an atom mapping model you can upload your own metabolic model.{" "}
        <a
          href="https://collinstark.github.io/metamdb-docs/reaction-model"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can read about the specifications for the model and more here!
        </a>
      </p>
      <p>
        <a href="https://collinstark.github.io/metamdb-docs/assets/files/example_model-a423dac6169034c7325e93b30371611c.csv">
          Download the example model here!
        </a>
      </p>

      <small className="text-muted">
        e.g. v1 [10021], Glucose [1] (abcdef), -->, Glucose 6-phosphate [2]
        (abcdef)
      </small>
      <FileUploadContainer {...initialState} />
    </div>
  );
};

export default ReactionModelUpload;
