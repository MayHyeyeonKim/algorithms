# 5개 맞음..

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'getMinSumNodeValues' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. UNWEIGHTED_INTEGER_GRAPH service
#  2. INTEGER k
#  3. 2D_INTEGER_ARRAY currentValues
#

#
# For the unweighted graph, <name>:
#
# 1. The number of nodes is <name>_nodes.
# 2. The number of edges is <name>_edges.
# 3. An edge exists between <name>_from[i] and <name>_to[i].
#
#
from collections import defaultdict, deque

def getMinSumNodeValues(service_nodes, service_from, service_to, k, currentValues):
    pass

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    service_nodes, service_edges = map(int, input().rstrip().split())

    service_from = [0] * service_edges
    service_to = [0] * service_edges

    for i in range(service_edges):
        service_from[i], service_to[i] = map(int, input().rstrip().split())

    k = int(input().strip())

    currentValues_rows = int(input().strip())
    currentValues_columns = int(input().strip())

    currentValues = []

    for _ in range(currentValues_rows):
        currentValues.append(list(map(int, input().rstrip().split())))

    result = getMinSumNodeValues(service_nodes, service_from, service_to, k, currentValues)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()