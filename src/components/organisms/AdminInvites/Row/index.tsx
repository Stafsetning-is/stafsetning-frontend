import React from "react";
import { TableRow } from "../../..";
import { Inner, Name, ButtonContainer } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { requestAdminStatusForUser } from "../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
/**
 * A component that holds the look of each particular row (each item) in
 * the list of pending admins
 */
const Component = ({ name, type, requestAdminStatusForUser, _id }: IProps) => {
    return (
        <TableRow>
            <Inner>
                <Name>{name}</Name>
                <ButtonContainer>
                    {type === "loading" ? (
                        <ClipLoader size={10} color={"#00ffcc"} />
                    ) : (
                        <FontAwesomeIcon
                            icon={faUserCheck}
                            onClick={() => requestAdminStatusForUser(_id)}
                        />
                    )}
                </ButtonContainer>
            </Inner>
        </TableRow>
    );
};

export default connect(null, { requestAdminStatusForUser })(Component);
