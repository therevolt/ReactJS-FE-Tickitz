import React from "react";
import Barcode from "react-barcode";

class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const barCodeOptions = {
      width: 0.7,
      height: 40,
      format: "CODE128",
      displayValue: false,
      background: "transparent",
      lineColor: "#000000",
      margin: 5,
      marginTop: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
    };
    return (
      <>
        {this.state.data && (
          <div className="tiket-wrapper px-5 py-5" ref={this.props.ref}>
            <div className="row header">
              <div className="col-8">
                <div className="container py-3 side-left">
                  <svg
                    width="124"
                    height="31"
                    viewBox="0 0 124 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.883 29.9892H8.49253V7.85787H0.369141V2.32021H21.9876V7.85787H13.883V29.9892ZM30.3749 3.70944C30.3749 4.19826 30.2807 4.65491 30.0921 5.07939C29.9163 5.5039 29.6713 5.87693 29.3571 6.19851C29.0429 6.50724 28.6723 6.75806 28.2452 6.951C27.8303 7.13109 27.3844 7.22113 26.9068 7.22113C26.4294 7.22113 25.977 7.13109 25.5498 6.951C25.1352 6.75806 24.7708 6.50724 24.4566 6.19851C24.1551 5.87693 23.9101 5.5039 23.7216 5.07939C23.5456 4.65491 23.4577 4.19826 23.4577 3.70944C23.4577 3.23351 23.5456 2.78329 23.7216 2.35881C23.9101 1.92144 24.1551 1.54841 24.4566 1.23968C24.7708 0.918102 25.1352 0.667281 25.5498 0.487192C25.977 0.294248 26.4294 0.197777 26.9068 0.197777C27.3844 0.197777 27.8303 0.294248 28.2452 0.487192C28.6723 0.667281 29.0429 0.918102 29.3571 1.23968C29.6713 1.54841 29.9163 1.92144 30.0921 2.35881C30.2807 2.78329 30.3749 3.23351 30.3749 3.70944ZM29.4891 29.9892H24.3058V9.32429H29.4891V29.9892ZM51.0698 13.4341L47.3001 17.3124C47.1117 16.7722 46.8541 16.2898 46.5273 15.8653C46.2007 15.4279 45.8302 15.0613 45.4153 14.7655C45.0134 14.4696 44.5736 14.2445 44.096 14.0901C43.6186 13.9358 43.1284 13.8586 42.6258 13.8586C41.9223 13.8586 41.2563 14.0066 40.6281 14.3024C40.0123 14.5982 39.4719 15.0163 39.0072 15.5566C38.5548 16.084 38.1966 16.7143 37.9328 17.4476C37.669 18.1807 37.537 18.9911 37.537 19.8786C37.537 20.5989 37.669 21.2743 37.9328 21.9047C38.1966 22.5349 38.5548 23.0881 39.0072 23.5639C39.4719 24.0399 40.0123 24.413 40.6281 24.683C41.2563 24.9533 41.9223 25.0882 42.6258 25.0882C43.1284 25.0882 43.6122 25.0176 44.0772 24.8761C44.5422 24.7346 44.9756 24.5352 45.3778 24.2778C45.7923 24.0078 46.1567 23.6861 46.4709 23.3131C46.7975 22.9272 47.0615 22.5028 47.2625 22.0396L51.0319 25.918C50.5546 26.6127 50.0016 27.2365 49.3734 27.7895C48.7576 28.3427 48.0855 28.8122 47.3567 29.1981C46.6405 29.584 45.8803 29.8736 45.0762 30.0664C44.2846 30.2722 43.4678 30.3752 42.6258 30.3752C41.2061 30.3752 39.868 30.1049 38.6114 29.5648C37.3674 29.0116 36.2743 28.2592 35.3319 27.3071C34.4019 26.3553 33.667 25.2425 33.1266 23.9691C32.5864 22.6956 32.3162 21.3323 32.3162 19.8786C32.3162 18.2964 32.5864 16.8172 33.1266 15.4408C33.667 14.0644 34.4019 12.8681 35.3319 11.8519C36.2743 10.8229 37.3674 10.0125 38.6114 9.42076C39.868 8.82904 41.2061 8.5332 42.6258 8.5332C43.4678 8.5332 44.2908 8.64253 45.095 8.86121C45.9117 9.07989 46.6845 9.40147 47.4133 9.82596C48.1547 10.2376 48.833 10.7457 49.4488 11.3503C50.077 11.9548 50.6174 12.6495 51.0698 13.4341ZM58.7785 29.9892H53.5953V1.10462H58.7785V19.3191L66.4494 9.36288H72.3679L65.6769 17.9684L72.3679 29.9892H66.4494L62.3596 22.4835L58.7785 27.3459V29.9892ZM80.4724 3.70944C80.4724 4.19826 80.3779 4.65491 80.1896 5.07939C80.0136 5.5039 79.7686 5.87693 79.4546 6.19851C79.1404 6.50724 78.7696 6.75806 78.3424 6.951C77.9279 7.13109 77.4819 7.22113 77.0043 7.22113C76.5269 7.22113 76.0745 7.13109 75.6474 6.951C75.2325 6.75806 74.8681 6.50724 74.5542 6.19851C74.2526 5.87693 74.0076 5.5039 73.819 5.07939C73.6432 4.65491 73.5552 4.19826 73.5552 3.70944C73.5552 3.23351 73.6432 2.78329 73.819 2.35881C74.0076 1.92144 74.2526 1.54841 74.5542 1.23968C74.8681 0.918102 75.2325 0.667281 75.6474 0.487192C76.0745 0.294248 76.5269 0.197777 77.0043 0.197777C77.4819 0.197777 77.9279 0.294248 78.3424 0.487192C78.7696 0.667281 79.1404 0.918102 79.4546 1.23968C79.7686 1.54841 80.0136 1.92144 80.1896 2.35881C80.3779 2.78329 80.4724 3.23351 80.4724 3.70944ZM79.5864 29.9892H74.4034V9.32429H79.5864V29.9892ZM93.6469 29.9892C92.403 29.9892 91.2344 29.7513 90.1413 29.2753C89.0481 28.7866 88.0869 28.1241 87.2576 27.2879C86.4408 26.4388 85.7936 25.4549 85.3162 24.3358C84.8512 23.2167 84.6188 22.0204 84.6188 20.7469V14.6111H82.1121V9.36288H84.6188V1.10462H89.7455V9.36288H97.5484V14.6111H89.7455V20.7469C89.7455 21.3001 89.8458 21.821 90.0471 22.3099C90.248 22.7857 90.5244 23.2038 90.8762 23.5639C91.2282 23.9243 91.6428 24.2135 92.1202 24.4322C92.5978 24.6382 93.1065 24.7409 93.6469 24.7409H97.5484V29.9892H93.6469ZM116.208 29.9892H99.3768L107.877 14.6111H99.3768V9.36288H116.208L107.707 24.7409H116.208V29.9892Z"
                      fill="white"
                    />
                    <path
                      d="M122.972 13.9842C122.968 13.9818 122.963 13.9805 122.959 13.9784L121.276 12.9829C121.171 13.1052 121.028 13.1864 120.871 13.2129C120.715 13.2393 120.554 13.2093 120.416 13.128C120.278 13.0466 120.172 12.9188 120.116 12.7665C120.06 12.6141 120.058 12.4466 120.109 12.2924L118.414 11.29C118.368 11.2632 118.314 11.256 118.263 11.2699C118.213 11.2838 118.169 11.3177 118.143 11.3643L113.111 20.2875L113.111 20.2881C113.097 20.311 113.089 20.3365 113.086 20.3629C113.082 20.3895 113.084 20.4161 113.091 20.4419C113.097 20.4677 113.109 20.4917 113.125 20.513C113.141 20.5341 113.161 20.5518 113.183 20.5652L114.879 21.5663C114.984 21.4443 115.127 21.3632 115.283 21.3366C115.44 21.3102 115.601 21.3402 115.738 21.4214C115.876 21.5028 115.982 21.6303 116.038 21.7823C116.094 21.9343 116.097 22.1016 116.047 22.2557L117.72 23.2439C117.727 23.2491 117.734 23.2547 117.741 23.2592C117.764 23.2726 117.788 23.281 117.814 23.2847C117.84 23.2881 117.866 23.2863 117.891 23.2794C117.917 23.2726 117.94 23.2607 117.961 23.2444C117.981 23.2283 117.999 23.208 118.012 23.1849V23.1851L123.044 14.2613C123.057 14.2382 123.066 14.2127 123.069 14.1863C123.073 14.1599 123.071 14.1331 123.064 14.1073C123.057 14.0816 123.046 14.0575 123.03 14.0363C123.014 14.0152 122.994 13.9975 122.972 13.9842ZM121.529 14.6769L117.606 21.6332C117.593 21.6564 117.575 21.6767 117.555 21.6927C117.534 21.7091 117.51 21.7209 117.486 21.7278C117.46 21.7346 117.434 21.7365 117.408 21.733C117.383 21.7296 117.358 21.7209 117.335 21.7075L114.699 20.1492C114.676 20.1358 114.656 20.1181 114.641 20.0971C114.625 20.076 114.613 20.0518 114.606 20.0262C114.6 20.0004 114.598 19.9735 114.601 19.9472C114.605 19.9208 114.613 19.8953 114.626 19.8724L118.549 12.916C118.576 12.8694 118.619 12.8354 118.67 12.8215C118.72 12.8076 118.774 12.8149 118.82 12.8417L121.456 14.4001C121.479 14.4134 121.499 14.4311 121.514 14.4522C121.53 14.4733 121.542 14.4974 121.549 14.5231C121.555 14.5488 121.557 14.5756 121.554 14.602C121.55 14.6284 121.542 14.6539 121.529 14.6769Z"
                      fill="white"
                    />
                    <path
                      d="M119.415 17.0886L118.58 16.9296L118.462 16.1123C118.46 16.1002 118.455 16.089 118.447 16.0802C118.439 16.0714 118.428 16.0655 118.416 16.0632C118.404 16.0609 118.392 16.0624 118.381 16.0675C118.371 16.0725 118.362 16.0809 118.355 16.0914L117.951 16.8096L117.136 16.6545C117.125 16.6523 117.113 16.6539 117.102 16.659C117.091 16.6641 117.082 16.6724 117.076 16.6829C117.07 16.6935 117.068 16.7056 117.069 16.7177C117.07 16.7298 117.074 16.7413 117.082 16.7505L117.621 17.3952L117.215 18.1131C117.209 18.1239 117.207 18.136 117.208 18.1481C117.209 18.1605 117.214 18.1721 117.222 18.1813C117.229 18.1905 117.24 18.1968 117.252 18.1997C117.263 18.2026 117.275 18.2018 117.286 18.1974L118.036 17.8928L118.588 18.5538C118.596 18.5628 118.606 18.5693 118.618 18.5722C118.629 18.5751 118.641 18.5743 118.652 18.5701C118.664 18.5659 118.673 18.5583 118.679 18.5483C118.686 18.5383 118.69 18.5264 118.69 18.5143L118.675 17.6281L119.432 17.1976C119.442 17.1916 119.451 17.1826 119.456 17.1717C119.461 17.1608 119.463 17.1486 119.461 17.1366C119.459 17.1247 119.454 17.1137 119.445 17.1051C119.437 17.0965 119.426 17.0908 119.415 17.0886Z"
                      fill="white"
                    />
                  </svg>
                  <h4 style={{ fontWeight: 600 }}>
                    {this.props.user.first_name} {this.props.user.last_name}
                  </h4>
                </div>
              </div>
              <div className="col-4 circle">
                <svg
                  width="124"
                  height="31"
                  viewBox="0 0 124 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.883 29.9892H8.49253V7.85787H0.369141V2.32021H21.9876V7.85787H13.883V29.9892ZM30.3749 3.70944C30.3749 4.19826 30.2807 4.65491 30.0921 5.07939C29.9163 5.5039 29.6713 5.87693 29.3571 6.19851C29.0429 6.50724 28.6723 6.75806 28.2452 6.951C27.8303 7.13109 27.3844 7.22113 26.9068 7.22113C26.4294 7.22113 25.977 7.13109 25.5498 6.951C25.1352 6.75806 24.7708 6.50724 24.4566 6.19851C24.1551 5.87693 23.9101 5.5039 23.7216 5.07939C23.5456 4.65491 23.4577 4.19826 23.4577 3.70944C23.4577 3.23351 23.5456 2.78329 23.7216 2.35881C23.9101 1.92144 24.1551 1.54841 24.4566 1.23968C24.7708 0.918102 25.1352 0.667281 25.5498 0.487192C25.977 0.294248 26.4294 0.197777 26.9068 0.197777C27.3844 0.197777 27.8303 0.294248 28.2452 0.487192C28.6723 0.667281 29.0429 0.918102 29.3571 1.23968C29.6713 1.54841 29.9163 1.92144 30.0921 2.35881C30.2807 2.78329 30.3749 3.23351 30.3749 3.70944ZM29.4891 29.9892H24.3058V9.32429H29.4891V29.9892ZM51.0698 13.4341L47.3001 17.3124C47.1117 16.7722 46.8541 16.2898 46.5273 15.8653C46.2007 15.4279 45.8302 15.0613 45.4153 14.7655C45.0134 14.4696 44.5736 14.2445 44.096 14.0901C43.6186 13.9358 43.1284 13.8586 42.6258 13.8586C41.9223 13.8586 41.2563 14.0066 40.6281 14.3024C40.0123 14.5982 39.4719 15.0163 39.0072 15.5566C38.5548 16.084 38.1966 16.7143 37.9328 17.4476C37.669 18.1807 37.537 18.9911 37.537 19.8786C37.537 20.5989 37.669 21.2743 37.9328 21.9047C38.1966 22.5349 38.5548 23.0881 39.0072 23.5639C39.4719 24.0399 40.0123 24.413 40.6281 24.683C41.2563 24.9533 41.9223 25.0882 42.6258 25.0882C43.1284 25.0882 43.6122 25.0176 44.0772 24.8761C44.5422 24.7346 44.9756 24.5352 45.3778 24.2778C45.7923 24.0078 46.1567 23.6861 46.4709 23.3131C46.7975 22.9272 47.0615 22.5028 47.2625 22.0396L51.0319 25.918C50.5546 26.6127 50.0016 27.2365 49.3734 27.7895C48.7576 28.3427 48.0855 28.8122 47.3567 29.1981C46.6405 29.584 45.8803 29.8736 45.0762 30.0664C44.2846 30.2722 43.4678 30.3752 42.6258 30.3752C41.2061 30.3752 39.868 30.1049 38.6114 29.5648C37.3674 29.0116 36.2743 28.2592 35.3319 27.3071C34.4019 26.3553 33.667 25.2425 33.1266 23.9691C32.5864 22.6956 32.3162 21.3323 32.3162 19.8786C32.3162 18.2964 32.5864 16.8172 33.1266 15.4408C33.667 14.0644 34.4019 12.8681 35.3319 11.8519C36.2743 10.8229 37.3674 10.0125 38.6114 9.42076C39.868 8.82904 41.2061 8.5332 42.6258 8.5332C43.4678 8.5332 44.2908 8.64253 45.095 8.86121C45.9117 9.07989 46.6845 9.40147 47.4133 9.82596C48.1547 10.2376 48.833 10.7457 49.4488 11.3503C50.077 11.9548 50.6174 12.6495 51.0698 13.4341ZM58.7785 29.9892H53.5953V1.10462H58.7785V19.3191L66.4494 9.36288H72.3679L65.6769 17.9684L72.3679 29.9892H66.4494L62.3596 22.4835L58.7785 27.3459V29.9892ZM80.4724 3.70944C80.4724 4.19826 80.3779 4.65491 80.1896 5.07939C80.0136 5.5039 79.7686 5.87693 79.4546 6.19851C79.1404 6.50724 78.7696 6.75806 78.3424 6.951C77.9279 7.13109 77.4819 7.22113 77.0043 7.22113C76.5269 7.22113 76.0745 7.13109 75.6474 6.951C75.2325 6.75806 74.8681 6.50724 74.5542 6.19851C74.2526 5.87693 74.0076 5.5039 73.819 5.07939C73.6432 4.65491 73.5552 4.19826 73.5552 3.70944C73.5552 3.23351 73.6432 2.78329 73.819 2.35881C74.0076 1.92144 74.2526 1.54841 74.5542 1.23968C74.8681 0.918102 75.2325 0.667281 75.6474 0.487192C76.0745 0.294248 76.5269 0.197777 77.0043 0.197777C77.4819 0.197777 77.9279 0.294248 78.3424 0.487192C78.7696 0.667281 79.1404 0.918102 79.4546 1.23968C79.7686 1.54841 80.0136 1.92144 80.1896 2.35881C80.3779 2.78329 80.4724 3.23351 80.4724 3.70944ZM79.5864 29.9892H74.4034V9.32429H79.5864V29.9892ZM93.6469 29.9892C92.403 29.9892 91.2344 29.7513 90.1413 29.2753C89.0481 28.7866 88.0869 28.1241 87.2576 27.2879C86.4408 26.4388 85.7936 25.4549 85.3162 24.3358C84.8512 23.2167 84.6188 22.0204 84.6188 20.7469V14.6111H82.1121V9.36288H84.6188V1.10462H89.7455V9.36288H97.5484V14.6111H89.7455V20.7469C89.7455 21.3001 89.8458 21.821 90.0471 22.3099C90.248 22.7857 90.5244 23.2038 90.8762 23.5639C91.2282 23.9243 91.6428 24.2135 92.1202 24.4322C92.5978 24.6382 93.1065 24.7409 93.6469 24.7409H97.5484V29.9892H93.6469ZM116.208 29.9892H99.3768L107.877 14.6111H99.3768V9.36288H116.208L107.707 24.7409H116.208V29.9892Z"
                    fill="white"
                  />
                  <path
                    d="M122.972 13.9842C122.968 13.9818 122.963 13.9805 122.959 13.9784L121.276 12.9829C121.171 13.1052 121.028 13.1864 120.871 13.2129C120.715 13.2393 120.554 13.2093 120.416 13.128C120.278 13.0466 120.172 12.9188 120.116 12.7665C120.06 12.6141 120.058 12.4466 120.109 12.2924L118.414 11.29C118.368 11.2632 118.314 11.256 118.263 11.2699C118.213 11.2838 118.169 11.3177 118.143 11.3643L113.111 20.2875L113.111 20.2881C113.097 20.311 113.089 20.3365 113.086 20.3629C113.082 20.3895 113.084 20.4161 113.091 20.4419C113.097 20.4677 113.109 20.4917 113.125 20.513C113.141 20.5341 113.161 20.5518 113.183 20.5652L114.879 21.5663C114.984 21.4443 115.127 21.3632 115.283 21.3366C115.44 21.3102 115.601 21.3402 115.738 21.4214C115.876 21.5028 115.982 21.6303 116.038 21.7823C116.094 21.9343 116.097 22.1016 116.047 22.2557L117.72 23.2439C117.727 23.2491 117.734 23.2547 117.741 23.2592C117.764 23.2726 117.788 23.281 117.814 23.2847C117.84 23.2881 117.866 23.2863 117.891 23.2794C117.917 23.2726 117.94 23.2607 117.961 23.2444C117.981 23.2283 117.999 23.208 118.012 23.1849V23.1851L123.044 14.2613C123.057 14.2382 123.066 14.2127 123.069 14.1863C123.073 14.1599 123.071 14.1331 123.064 14.1073C123.057 14.0816 123.046 14.0575 123.03 14.0363C123.014 14.0152 122.994 13.9975 122.972 13.9842ZM121.529 14.6769L117.606 21.6332C117.593 21.6564 117.575 21.6767 117.555 21.6927C117.534 21.7091 117.51 21.7209 117.486 21.7278C117.46 21.7346 117.434 21.7365 117.408 21.733C117.383 21.7296 117.358 21.7209 117.335 21.7075L114.699 20.1492C114.676 20.1358 114.656 20.1181 114.641 20.0971C114.625 20.076 114.613 20.0518 114.606 20.0262C114.6 20.0004 114.598 19.9735 114.601 19.9472C114.605 19.9208 114.613 19.8953 114.626 19.8724L118.549 12.916C118.576 12.8694 118.619 12.8354 118.67 12.8215C118.72 12.8076 118.774 12.8149 118.82 12.8417L121.456 14.4001C121.479 14.4134 121.499 14.4311 121.514 14.4522C121.53 14.4733 121.542 14.4974 121.549 14.5231C121.555 14.5488 121.557 14.5756 121.554 14.602C121.55 14.6284 121.542 14.6539 121.529 14.6769Z"
                    fill="white"
                  />
                  <path
                    d="M119.415 17.0886L118.58 16.9296L118.462 16.1123C118.46 16.1002 118.455 16.089 118.447 16.0802C118.439 16.0714 118.428 16.0655 118.416 16.0632C118.404 16.0609 118.392 16.0624 118.381 16.0675C118.371 16.0725 118.362 16.0809 118.355 16.0914L117.951 16.8096L117.136 16.6545C117.125 16.6523 117.113 16.6539 117.102 16.659C117.091 16.6641 117.082 16.6724 117.076 16.6829C117.07 16.6935 117.068 16.7056 117.069 16.7177C117.07 16.7298 117.074 16.7413 117.082 16.7505L117.621 17.3952L117.215 18.1131C117.209 18.1239 117.207 18.136 117.208 18.1481C117.209 18.1605 117.214 18.1721 117.222 18.1813C117.229 18.1905 117.24 18.1968 117.252 18.1997C117.263 18.2026 117.275 18.2018 117.286 18.1974L118.036 17.8928L118.588 18.5538C118.596 18.5628 118.606 18.5693 118.618 18.5722C118.629 18.5751 118.641 18.5743 118.652 18.5701C118.664 18.5659 118.673 18.5583 118.679 18.5483C118.686 18.5383 118.69 18.5264 118.69 18.5143L118.675 17.6281L119.432 17.1976C119.442 17.1916 119.451 17.1826 119.456 17.1717C119.461 17.1608 119.463 17.1486 119.461 17.1366C119.459 17.1247 119.454 17.1137 119.445 17.1051C119.437 17.0965 119.426 17.0908 119.415 17.0886Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="row content">
              <div className="col-8">
                <div className="container py-5">
                  <div className="item-wrap">
                    <p className="title">Movie</p>
                    <h3 className="desc">{this.state.data.movie}</h3>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Date</p>
                        <h3 className="desc">{this.state.data.date}</h3>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Time</p>
                        <h3 className="desc">{this.state.data.time}</h3>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Category</p>
                        <h3 className="desc">{this.state.data.category}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Count</p>
                        <h3 className="desc">{this.state.data.count} pieces</h3>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Seats</p>
                        <h3 className="desc">{this.state.data.seats}</h3>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-wrap">
                        <p className="title">Price</p>
                        <h3 className="desc">Rp {parseInt(this.state.data.price) * 14000}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 right">
                <div className="item-wrap pt-5">
                  <p className="title">Movie</p>
                  <h3 className="desc">{this.state.data.movie}</h3>
                </div>
                <div className="row">
                  <div className="col-4 mt-2">
                    <div className="item-wrap">
                      <p className="title">Date</p>
                      <h3 className="desc">{this.state.data.date}</h3>
                    </div>
                  </div>
                  <div className="col-4 mt-2">
                    <div className="item-wrap">
                      <p className="title">Time</p>
                      <h3 className="desc">{this.state.data.time}</h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <div className="item-wrap">
                      <p className="title">Count</p>
                      <h3 className="desc">{this.state.data.count} pieces</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="item-wrap">
                      <p className="title">Seats</p>
                      <h3 className="desc">{this.state.data.seats}</h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="item-wrap">
                      <p className="title">Category</p>
                      <h3 className="desc">{this.state.data.category}</h3>
                    </div>
                  </div>
                </div>
                <div className="barcode-image">
                  <Barcode
                    {...barCodeOptions}
                    value={`${this.state.data.category}-${this.state.data.time}-${this.state.data.seats}`}
                    alt="barcode"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ComponentToPrint;
