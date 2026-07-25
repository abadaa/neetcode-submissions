class MinStack {
    private ArrayList<Integer> stack;
    private int length;

    public MinStack() {
        stack = new ArrayList<>();
        length = 0;
    }
    
    public void push(int val) {
        stack.add(val);
        length++;
    }
    
    public void pop() {
        stack.remove(length - 1);
        length--;
    }
    
    public int top() {
        int retVal = stack.get(length-1);
        return retVal;
    }
    
    public int getMin() {
        return Collections.min(stack);
    }
}
