@IsTest
private class AccountDiscountServiceTest {

    @IsTest
    static void testCalculateDiscountTiers() {
        Test.startTest();
        Decimal highDiscount = AccountDiscountService.calculateDiscount(1500000);
        Decimal midDiscount = AccountDiscountService.calculateDiscount(600000);
        Decimal lowDiscount = AccountDiscountService.calculateDiscount(100000);
        Decimal nullDiscount = AccountDiscountService.calculateDiscount(null);
        Decimal negativeDiscount = AccountDiscountService.calculateDiscount(-500);
        Test.stopTest();

        System.assertEquals(0.20, highDiscount, 'Expected 20% discount for revenue >= 1M');
        System.assertEquals(0.10, midDiscount, 'Expected 10% discount for revenue >= 500K');
        System.assertEquals(0.05, lowDiscount, 'Expected 5% discount for low revenue');
        System.assertEquals(0.0, nullDiscount, 'Expected 0% discount for null revenue');
        System.assertEquals(0.0, negativeDiscount, 'Expected 0% discount for negative revenue');
    }

    @IsTest
    static void testApplyDiscountToAccount() {
        Account testAcc = new Account(
            Name = 'Test Enterprise',
            AnnualRevenue = 2000000
        );

        Test.startTest();
        AccountDiscountService.applyDiscountToAccount(testAcc);
        Test.stopTest();

        System.assertEquals('Applicable Discount: 20.0%', testAcc.Description, 'Description should show 20% discount');
    }

    @IsTest
    static void testApplyDiscountNullAccount() {
        Test.startTest();
        AccountDiscountService.applyDiscountToAccount(null);
        Test.stopTest();

        System.assert(true, 'Handled null account gracefully without throwing an error');
    }
}