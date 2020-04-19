import RequestModel, { Methods, RequestParameter } from "./RequestModel";
import RequestResultModel, {
  ResultBodyField,
  resultStatus,
  SERVER_ERROR_RESULT,
} from "./RequestResultModel";
import {EXAMPLE_CUSTOMER, PAGE_SIZE} from "../../constants";

const apiEndpoint = process.env.REACT_APP_CUSTOMERS_API_ENDPOINT;

const getSuccessResultModel = (currentPage, count, customerList) => {
  const successResult = new RequestResultModel(resultStatus.OK);
  successResult.fields = [
    new ResultBodyField("count", count),
    new ResultBodyField(
      "next",
      currentPage === (count / PAGE_SIZE) ? null : apiEndpoint + `?page=${currentPage + 1}`
    ),
    new ResultBodyField(
      "previous",
      currentPage === 1 ? null : apiEndpoint + `?page=${currentPage - 1}`
    ),
    new ResultBodyField(
      "results",
      count > 0 ? customerList : [EXAMPLE_CUSTOMER]
    ),
  ];
  return successResult;
};

export default class CustomerListRequestModel extends RequestModel {
  constructor(currentPage, count, customerList = []) {
    const pageParameter = new RequestParameter(
      "page",
      currentPage,
      "List page that will be fetched"
    );
    const successResult = getSuccessResultModel(
      currentPage,
      count,
      customerList.slice(0, 2)
    );

    super(
      Methods.GET,
      process.env.REACT_APP_CUSTOMERS_API_ENDPOINT + `?page=${currentPage}`,
      "Customer List",
      [pageParameter],
      [successResult, SERVER_ERROR_RESULT]
    );
  }
}
