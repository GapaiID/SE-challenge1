const parseError = (err: any) => {
  const response = {
    nonFieldErrors: [] as string[],
    fields: {} as any,
  };

  if (err?.message && !err?.data) {
    response.nonFieldErrors.push(err.message);
  }
  if (err?.data) {
    err.data.forEach(({ field, message }: any) => {
      response.fields[snakeToCamel(field)] = [message]
    });
  }

  console.log("response", response);

  return response;
};

const snakeToCamel = (inputString: any) => {
  return inputString.replace(/_([a-z])/g, (_: any, letter: any) => letter.toUpperCase());
}

export { parseError };
