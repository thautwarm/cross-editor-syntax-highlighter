def rename_type(x):
    if x == "int":
        return "number"
    if x == "float":
        return "number"
    if x == "token":
        return "Token"
    if x == "list":
        return "Array"
    if x == "str":
        return "string"
    return x