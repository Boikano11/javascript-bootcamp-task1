function kangaroo(x1, v1, x2, v2) {
  // Solve for t: x1 + d1 * t = x2 + d2 * t
  let t = (x2 - x1) / (v1 - v2);

  // If t is negative, they never meet in forward time
  if (t < 0 || !Number.isInteger(t)) {
    return "NO";
  }

  return "YES";
}
