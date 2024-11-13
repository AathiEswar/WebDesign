import styled from "styled-components"

export const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: -99px ;
  width: 100px;
  height: 100%;
  fill: rgb(29, 29, 29);
  stroke: none;
`

export const Button = styled.button`
 		position: fixed;
		right: 0;
		top: 0;
		margin: 20px;
		height: 80px;
		width: 80px;
		border-radius: 50%;
		background-color: var(--accent);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 2;
		box-shadow: 0 0 5px 0 rgb(45, 45, 45);

		@media (max-width: 768px) {
			height: 50px;
			width: 50px;
		}

		.burger {
			width: 100%;
			&::after,
			&::before {
				display: block;
				content: "";
				width: 40%;
				position: relative;
				background-color: rgb(0, 0, 0);
				height: 2px;
				margin: auto;
				transition: all 0.5s;
			}
			&::after {
				top: 5px;
			}
			&::before {
				top: -5px;
			}
		}

		.burgerActive {
			&::after {
				top: -1px;
				transform: rotate(45deg);
			}
			&::before {
				top: 1px;
				transform: rotate(-45deg);
			}
		}
`;
export const StyledMenuContainer = styled.div`
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  height: 100dvh;
  background-color: rgb(29, 29, 29);
  color: white;
  z-index: 1;

  @media (max-width : 1023px) {
    width: 100%;
  }

  .body{
    overflow-y : scroll;
    padding : 50px 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap : 12px;

    @media (max-width : 768px) {
      padding: 60px;
    }

    @media (max-width : 425px) {
      padding: 40px;
    }

    .nav{
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      gap: 12px;
      font-size: 56px;

      @media (max-width : 1024px){
          font-size : 42px;
      }
      @media (max-width : 768px){
          font-size : 36px;
      }
      .header{
        p{
          font-size: large;
          color: gray;
          margin-bottom: 40px;
          border-bottom: 1px solid gray;
          padding-bottom: 10px;
        }
      }

    }

    .footer{
      flex-wrap: wrap;
      display: flex;
      gap: 16px;
      font-size: 16px;
      a{
        text-decoration: none;
        display : block ;
        color : white;
        font-weight: 300;
        text-overflow: ellipsis;
          white-space: nowrap;        
          overflow: hidden;          
          text-overflow: ellipsis;  
      }
    }
  }
`