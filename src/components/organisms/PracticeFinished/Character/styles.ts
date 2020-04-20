import styled from "styled-components";

export const CharSpan = styled.span`
	font-size: 30px;
	color: #666666;
	padding-right: 1px;
	position: relative;
	-webkit-user-select: none; /* Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */	
	user-select: none; /* Standard */s
`;

export const ErrSpan = styled.span`
    font-size: 30px;
    color: #ff0066;
    padding-right: 1px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;

export const TypedError = styled.div`
    position: absolute;
    padding: 5px 10px 5px 10px;
    border-radius: 3px;
    background-color: #f8f8f8;
    top: -40px;
    left: 0px;
    border: 1px dotted #cecece;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
`;
