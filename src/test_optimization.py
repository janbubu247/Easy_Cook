import pulp as p
Lp_prob = p.LpProblem('Problem', p.LpMaximize)

x = p.LpVariable("x", lowBound = 5) # Create a variable x >= 0
y = p.LpVariable("y", lowBound = 12) # Create a variable y >= 0

Lp_prob += 6 * x + 5 * y

Lp_prob += 3 * x + 2 * y <= 12
Lp_prob += x + y <= 5
Lp_prob += x >= 0
Lp_prob += y >= 0

print(Lp_prob)

status = Lp_prob.solve()
print(p.LpStatus[status])
print(p.value(x), p.value(y), p.value(Lp_prob.objective))