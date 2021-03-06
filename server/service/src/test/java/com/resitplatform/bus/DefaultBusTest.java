 
package com.resitplatform.bus;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Component;

@SpringBootTest
class DefaultBusTest {

    @Autowired
    private Bus bus;

    @Test
    void name() {
        String result = bus.executeCommand(new Command3());
        System.out.println(result);
    }

    static class TestCommand1 implements Command<String> {
    }

    @Component
    public static class TestCommand1Handler implements CommandHandler<String, TestCommand1> {
        @Override
        public String handle(TestCommand1 command) {
            return "handle-result-1";
        }
    }
}
