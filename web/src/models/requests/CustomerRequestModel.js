import RequestModel, { Methods, RequestParameter } from "./RequestModel";
import RequestResultModel, {
  ResultBodyField,
  resultStatus,
  SERVER_ERROR_RESULT,
} from "./RequestResultModel";
import { EXAMPLE_CUSTOMER, LOCATION_API_ENDPOINT } from "../../constants";

const getNotFoundResult = (customerId) => {
  const resultModel = new RequestResultModel(resultStatus.NOT_FOUND);
  resultModel.fields = [
    new ResultBodyField(
      "message",
      `No customer with id ${customerId} was found`
    ),
  ];

  return resultModel;
};

const getSuccessResult = (customerModel) => {
  const resultModel = new RequestResultModel(resultStatus.OK);
  resultModel.fields = [new ResultBodyField("customer", customerModel)];
  return resultModel;
};

export default class CustomerRequestModel extends RequestModel {
  constructor(customer = EXAMPLE_CUSTOMER) {
    const customerIdParameter = new RequestParameter(
      "id",
      customer.id,
      "Id of the customer"
    );
    const notFoundResult = getNotFoundResult(customer.id);
    const successResult = getSuccessResult(customer);

    super(
      Methods.GET,
      LOCATION_API_ENDPOINT,
      "Customer",
      "Returns the data of a customer, including its location.",
      [customerIdParameter],
      [successResult, notFoundResult, SERVER_ERROR_RESULT]
    );
  }
}
