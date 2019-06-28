import time

# Ticker class para tener un log de tiempo
class Ticker:
    def __init__(self):
        self.t = time.time()

    def __call__(self):
        dt = time.time() - self.t
        self.t = time.time()
        return dt
