import RequestModel, { Methods, RequestParameter } from "./RequestModel";
import RequestResultModel, {
  ResultBodyField,
  resultStatus,
  SERVER_ERROR_RESULT,
} from "./RequestResultModel";
import {
  CUSTOMERS_API_ENDPOINT,
  EXAMPLE_CUSTOMER,
  PAGE_SIZE,
} from "../../constants";

const apiEndpoint = CUSTOMERS_API_ENDPOINT;

export const omitCustomerLocation = (customer) => {
  const { location, ...rest } = customer;
  return rest;
};

const getSuccessResultModel = (currentPage, count, customerList) => {
  const customers =
    count > 0
      ? customerList.map((c) => omitCustomerLocation(c))
      : [EXAMPLE_CUSTOMER].map((c) => omitCustomerLocation(c));

  const successResult = new RequestResultModel(resultStatus.OK);
  successResult.fields = [
    new ResultBodyField("count", count),
    new ResultBodyField(
      "next",
      currentPage === count / PAGE_SIZE
        ? null
        : apiEndpoint + `?page=${currentPage + 1}`
    ),
    new ResultBodyField(
      "previous",
      currentPage === 1 ? null : apiEndpoint + `?page=${currentPage - 1}`
    ),
    new ResultBodyField("results", customers),
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
      apiEndpoint + `?page=${currentPage}`,
      "Customer List",
      "Returns a list of customer without the locations.",
      [pageParameter],
      [successResult, SERVER_ERROR_RESULT]
    );
  }
}
