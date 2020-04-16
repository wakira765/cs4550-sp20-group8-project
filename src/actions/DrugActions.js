export const FIND_DRUG_DATA = "FIND_DRUG_DATA";
export const FIND_DRUG_COMMENTS = "FIND_DRUG_COMMENTS";
export const CREATE_DRUG_COMMENT = "CREATE_DRUG_COMMENT";

export const findDrugDataAction = (drugInfo) => ({
    type: FIND_DRUG_DATA,
    drugInfo: drugInfo
});

export const findDrugCommentsAction = (comments) => ({
    type: FIND_DRUG_COMMENTS,
    comments: comments
});

export const createDrugCommentAction = (comment) => ({
    type: CREATE_DRUG_COMMENT,
    comment: comment
});
