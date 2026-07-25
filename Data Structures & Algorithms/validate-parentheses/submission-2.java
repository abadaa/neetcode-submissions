class Solution {
    public boolean isValid(String s) {
        if(s.length() < 2) {
            return false;
        } else {
            Stack<Character> stack = new Stack<>();
            Map<Character, Character> hashMap = new HashMap<>(3);
            hashMap.put(')', '(');
            hashMap.put('}', '{');
            hashMap.put(']', '[');
            char[] x = s.toCharArray();
            for(char c : x) {
                if(hashMap.containsKey(c)) {
                    if(!stack.isEmpty() && hashMap.get(c).equals(stack.peek())) {
                        stack.pop();
                    } else {
                        return false;
                    }
                } else {
                    stack.push(c);
                }
            }

            return stack.isEmpty();
        }
    }
}
