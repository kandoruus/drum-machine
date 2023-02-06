type UpdateDisplayAction = {
  type: string
  payload: string
}

type DispatchType = (args: UpdateDisplayAction) => UpdateDisplayAction