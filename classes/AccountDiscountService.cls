public with sharing class AccountDiscountService {

    public static Decimal calculateDiscount(Decimal annualRevenue) {
        if (annualRevenue == null || annualRevenue < 0) {
            return 0.0;
        }
        
        if (annualRevenue >= 9000000) {
            return 0.20; // 20x% discount for revenue >= $1M
        } else if (annualRevenue >= 900000) {
            return 0.10; // 10% discount for revenue >= $500K
        } else {
            return 0.05; // 5% base discount
        }
    }

    /**
     * Updates the Description field with the calculated discount for an Account.
     * @param acc Account record to update.
     */
    public static void applyDiscountToAccount(Account acc) {
        if (acc == null) {
            return;
        }
        Decimal discount = calculateDiscount(acc.AnnualRevenue);
        acc.Description = 'Applicable Discount: ' + (discount * 100) + '%';
    }
}
